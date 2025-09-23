import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';

const FileUploadDemo: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploadStatus, setUploadStatus] = useState<string>('');

  const handleFileChange = (files: File[]) => {
    setUploadedFiles(files);
    if (files.length > 0) {
      setUploadStatus(`Successfully selected ${files.length} file(s)`);
    } else {
      setUploadStatus('No files selected');
    }
  };

  const handleUpload = () => {
    if (uploadedFiles.length > 0) {
      // Simulate upload process
      setUploadStatus('Uploading...');
      setTimeout(() => {
        setUploadStatus('Upload successful!');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Mmwafrika Store</h1>
          <p className="text-gray-400">File Upload Component Demo</p>
        </header>
        
        <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-800 p-6 mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">Product Image Upload</h2>
          
          <div className="max-w-md mx-auto">
            <FileUpload 
              onFileChange={handleFileChange}
              maxSizeMB={2}
            />
            
            {uploadStatus && (
              <div className="mt-4 text-center text-sm">
                <p className={uploadStatus.includes('successful') ? 'text-green-400' : 'text-gray-400'}>
                  {uploadStatus}
                </p>
              </div>
            )}
            
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleUpload}
                disabled={uploadedFiles.length === 0}
                className="px-6 py-2 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg font-medium transition-colors"
              >
                Upload Image
              </button>
            </div>
          </div>
        </div>
        
        {uploadedFiles.length > 0 && (
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-800 p-6">
            <h2 className="text-xl font-bold mb-4">Selected Files</h2>
            <ul className="space-y-2">
              {uploadedFiles.map((file, index) => (
                <li key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center">
                    <i className="fas fa-file-image text-teal-500 mr-3"></i>
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-xs text-gray-400">
                        {(file.size / 1024).toFixed(2)} KB
                      </p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 bg-teal-900/50 text-teal-400 rounded">
                    {file.type.split('/')[1] || file.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-800 p-6 mt-8">
          <h2 className="text-xl font-bold mb-4">Features</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <i className="fas fa-check-circle text-teal-500 mr-2"></i>
              <span>Drag and drop support</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check-circle text-teal-500 mr-2"></i>
              <span>File type validation (SVG, PNG, JPG, GIF)</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check-circle text-teal-500 mr-2"></i>
              <span>File size limit (2MB)</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check-circle text-teal-500 mr-2"></i>
              <span>Responsive design</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check-circle text-teal-500 mr-2"></i>
              <span>Accessible with proper ARIA attributes</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check-circle text-teal-500 mr-2"></i>
              <span>Glassmorphic UI elements</span>
            </li>
          </ul>
        </div>
        
        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>© 2025 Mmwafrika Store. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default FileUploadDemo;