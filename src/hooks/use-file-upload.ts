import { useState, useCallback, useRef } from 'react';

interface FileWithPreview {
  id: string;
  preview: string;
  name: string;
  size: number;
  type: string;
  lastModified: number;
}

interface UseFileUploadProps {
  accept?: string;
  maxSize?: number;
  multiple?: boolean;
}

interface UseFileUploadReturn {
  files: FileWithPreview[];
  isDragging: boolean;
  errors: string[];
  handleDragEnter: (e: React.DragEvent) => void;
  handleDragLeave: (e: React.DragEvent) => void;
  handleDragOver: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent) => void;
  openFileDialog: () => void;
  removeFile: (id: string) => void;
  getInputProps: () => {
    ref: React.RefObject<HTMLInputElement>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    accept?: string;
    multiple?: boolean;
  };
}

export const useFileUpload = ({
  accept = '*',
  maxSize = 5 * 1024 * 1024, // 5MB default
  multiple = false,
}: UseFileUploadProps = {}): [UseFileUploadReturn, { reset: () => void }] => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const reset = useCallback(() => {
    setFiles([]);
    setErrors([]);
  }, []);

  const validateFile = useCallback(
    (file: File): string | null => {
      // Check file type
      if (accept !== '*') {
        const acceptedTypes = accept.split(',').map(type => type.trim());
        const isValidType = acceptedTypes.some(type => {
          if (type.endsWith('/*')) {
            const baseType = type.slice(0, -1); // Remove the '*'
            return file.type.startsWith(baseType);
          }
          return file.type === type || file.name.endsWith(type);
        });

        if (!isValidType) {
          return `File type not supported. Accepted types: ${accept}`;
        }
      }

      // Check file size
      if (file.size > maxSize) {
        return `File size exceeds ${maxSize / 1024 / 1024}MB limit`;
      }

      return null;
    },
    [accept, maxSize]
  );

  const processFiles = useCallback(
    (fileList: FileList) => {
      const newFiles: FileWithPreview[] = [];
      const newErrors: string[] = [];
      const errorSet = new Set<string>(); // To avoid duplicate errors

      Array.from(fileList).forEach(file => {
        const error = validateFile(file);
        if (error && !errorSet.has(error)) {
          errorSet.add(error);
          newErrors.push(error);
          return;
        }

        // Create preview
        const preview = URL.createObjectURL(file);
        const fileWithPreview: FileWithPreview = {
          id: `${file.name}-${file.size}-${file.lastModified}`,
          preview,
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: file.lastModified,
        };

        newFiles.push(fileWithPreview);
      });

      if (newFiles.length > 0) {
        setFiles(prev => (multiple ? [...prev, ...newFiles] : [newFiles[0]]));
      }

      if (newErrors.length > 0) {
        setErrors(newErrors);
      }
    },
    [multiple, validateFile]
  );

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        processFiles(e.dataTransfer.files);
        e.dataTransfer.clearData();
      }
    },
    [processFiles]
  );

  const openFileDialog = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.click();
    }
  }, []);

  const removeFile = useCallback((id: string) => {
    setFiles(prev => {
      const fileToRemove = prev.find(file => file.id === id);
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return prev.filter(file => file.id !== id);
    });
  }, []);

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        processFiles(e.target.files);
      }
    },
    [processFiles]
  );

  const getInputProps = useCallback(() => {
    return {
      ref: inputRef,
      onChange: handleFileInputChange,
      accept,
      multiple,
    };
  }, [accept, multiple, handleFileInputChange]);

  return [
    {
      files,
      isDragging,
      errors,
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
      openFileDialog,
      removeFile,
      getInputProps,
    },
    { reset },
  ];
};