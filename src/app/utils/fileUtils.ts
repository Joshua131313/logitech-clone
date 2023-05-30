
export const bytesToMB = (bytes: number) => {
    const mb = bytes / (1024 * 1024);
    return mb;
}
export const determineFileType = (fileName: string, fileType: string) => {
    if(fileType.toLowerCase().includes('image')) {
      return {
        type: 'image',
        icon: 'image'
      }
    }
    else if(fileName.includes('xls')) {
      return {
        type: 'excel',
        icon: 'excel'
      }
    }
    else if(fileName.includes('doc')) {
      return {
        type: 'word',
        icon: 'word'
      }
    }
    else if(fileName.includes('ppt')) {
      return {
        type: 'powerpoint',
        icon: 'powerpoint'
      }
    }
    else if(fileType.toLowerCase().includes('video')) {
      return {
        type: 'video',
        icon: 'video'
      }
    }
    else {
      return {
        type: 'other-file',
        icon: 'alt'
      }
    }
}
export const bytesToSize = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Bytes';
    const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), sizes.length - 1);
    if (i === 0) return `${bytes} ${sizes[i]}`;
    return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`;
}
export const convertFilesToBase64 = (files: File[]) => {
    return Promise.all(files.map((file, i) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          let encoded = reader.result!.toString().replace(/^data:(.*,)?/, "")
          if (encoded.length % 4 > 0) {
            encoded += "=".repeat(4 - (encoded.length % 4))
          }
          resolve(encoded)
        }
        reader.onerror = (error) => reject(error)
      })
        .catch(err => console.log(err))
    }))
      .then((encodedFiles) => {
        console.log(encodedFiles)
        return encodedFiles
      })
      .catch(err => console.log(err))
}
