import { IUploadedFile } from 'app/types/dbTypes/dbInterfaces';
import { auth, storage } from 'Fire';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
  export const uploadFiles = (files: File[], storagePath: string, setUploadProgress: (progress: number)=> void): Promise<IUploadedFile[]>  => {
    const user = auth.currentUser
    return new Promise((resolve, reject) => {
      if(!files?.length) return resolve([])
      const filesUrl: IUploadedFile[] = []
      files.forEach((file, i) => {
          const storageRef =  ref(storage, storagePath + '/' + file.name)
          // const uploadTask = storageRef.child( id ).put(file)
          const uploadTask = uploadBytesResumable(storageRef, file)
          uploadTask.on('state_changed', 
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setUploadProgress?.(progress)
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
            console.log(error)
            reject(error)
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(downloadURL=> {
             user && filesUrl.push({
                  downloadURL,
                  fileType: file.type,
                  fileID: storagePath + '/' + file.name,
                  uploadedBy: user.uid,
                  fileInfo: {
                    size: file.size, 
                    name: file.name, 
                    lastModified: file.lastModified
                  }
               })
               resolve(filesUrl)
            })
          })
      })
    })
  }
  export const deleteMultipleStorageFiles = (storagePath: string, filenames: string[]) => {
    return new Promise((resolve, reject) => {
      if(!filenames?.length) return resolve(null)
      filenames.forEach((file, i) => {
        let storageRef = ref(storage, `${storagePath}/${file}`)
        deleteObject(storageRef)
        .then(() => {
          if(i === filenames.length-1) {
            resolve(null)
          }
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    })
  }