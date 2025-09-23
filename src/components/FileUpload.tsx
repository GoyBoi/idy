import React, { useImperativeHandle, useRef, forwardRef } from 'react';

export interface FileUploadProps {
  maxSizeMB?: number;
  accept?: string;
  onFileChange?: (files: File[]) => void;
  disabled?: boolean;
}

export interface FileUploadRef {
  open: () => void;
  clear: () => void;
}

export const FileUpload = forwardRef<FileUploadRef, FileUploadProps>(({
  maxSizeMB = 2,
  accept = 'image/svg+xml,image/png,image/jpeg,image/jpg,image/gif',
  onFileChange,
  disabled = false,
}, ref) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (onFileChange) {
      onFileChange(files);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current && !disabled) {
      fileInputRef.current.click();
    }
  };

  useImperativeHandle(ref, () => ({
    open: triggerFileInput,
    clear: () => {
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  }));

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileInput}
        className="sr-only"
        disabled={disabled}
        aria-label="Upload files"
      />
    </>
  );
});

FileUpload.displayName = 'FileUpload';

export default FileUpload;