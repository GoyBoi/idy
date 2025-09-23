#!/bin/bash

# Cleanup script to remove unnecessary files and directories

echo "Cleaning up unnecessary files..."

# Remove test files
find . -name "*test*" -type f -not -path "./node_modules/*" -not -path "./.git/*" -delete
find . -name "*Test*" -type f -not -path "./node_modules/*" -not -path "./.git/*" -delete

# Remove documentation files (except main ones)
find . -name "README.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -not -path "." -delete
find . -name "SUMMARY.md" -type f -not -path "./node_modules/*" -not -path "./.git/*" -delete

# Remove temporary files
find . -name "*.tmp" -type f -not -path "./node_modules/*" -not -path "./.git/*" -delete
find . -name "*safelist*" -type f -not -path "./node_modules/*" -not -path "./.git/*" -delete

# Remove log files
find . -name "*.log" -type f -not -path "./node_modules/*" -not -path "./.git/*" -delete

# Remove backup files
find . -name "*~" -type f -not -path "./node_modules/*" -not -path "./.git/*" -delete
find . -name "*.bak" -type f -not -path "./node_modules/*" -not -path "./.git/*" -delete

# Remove dist directory contents (will be rebuilt)
rm -rf dist/*

echo "Cleanup complete!"