import DashboardLayout from 'app/components/layout/Dashboard/DashboardLayout';
import UpdateAvatar from 'app/components/ui/Avatars/UpdateAvatar';
import AppButton from 'app/components/ui/Buttons/AppButton';
import { AppInput } from 'app/components/ui/Inputs/AppInput';
import useUserInfo from 'app/hooks/db/useUserInfo';
import { handleUpdateUserInfo } from 'app/services/authServices';
import { uploadFiles } from 'app/services/storageServices';
import { auth } from 'Fire';
import { EmailAuthProvider, reauthenticateWithCredential, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import './MyAccount.css'

interface Props {
    
}

const MyAccount = (props: Props) => {
    const userInfo = useUserInfo({})
    const [newAvatar, setNewAvatar] = useState<File | null>(null)
    const [avatar, setAvatar] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [country, setCountry] = useState<string>('')
    const [province, setProvince] = useState<string>('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState<string>('')
    const [companyName, setCompanyName] = useState<string>('')
    const [showModal, setShowModal] = useState<boolean>(false)
    const [password, setPassword] = useState<string>('')

    const saveInfo = () => {
        if(auth.currentUser) {
            if(newAvatar) {
                uploadFiles([newAvatar], auth.currentUser?.uid, ()=> {}).then((files)=> {
                    handleUpdateUserInfo(
                        {
                            address,
                            city,
                            companyName,
                            country,
                            name,
                            postalCode,
                            profilePic: files[0].downloadURL,
                        }
                    )
                    auth.currentUser && updateProfile(auth.currentUser, {
                        photoURL: files[0].downloadURL,
                    })
                })
            }
            else {
                handleUpdateUserInfo(
                    {
                        address,
                        city,
                        companyName,
                        country,
                        name,
                        postalCode,
                    }
                )
            }
        }
    }

    useEffect(()=> {
        if(userInfo) {
            setAvatar(userInfo?.profilePic || '')
            setName(userInfo?.name || '')
            setEmail(userInfo.email)
            setAddress(userInfo.address || '') 
            setPhone(userInfo.phoneNumber || '')
            setProvince(userInfo.province || '')
            setCity(userInfo.city || '')
            setPostalCode(userInfo.postalCode || '')
            setCompanyName(userInfo.companyName || '')
            setCountry(userInfo.country || '')
        }
    }, [userInfo])


    return (
        <DashboardLayout
            className='my-account-page'
            title='My Account'

        >
            <UpdateAvatar 
                avatar={newAvatar}
                setAvatar={setNewAvatar}
                defaultValue={avatar}
            />
            <div className="secondary-inputs flex-col">
                    <AppInput 
                        text='Name *'
                        placeholder='John Doe'
                        value={name}
                        setValue={setName}
                    />
                    <AppInput 
                        disabled
                        text='Email *'
                        placeholder='johndoe@invoice.com'
                        value={email}
                    />
                    <AppInput 
                        text='Address'
                        placeholder='123 Apple Rd.'
                        value={address}
                        setValue={setAddress}
                    />
                    <AppInput 
                        type={'number'}
                        text='Phone'
                        placeholder='(123) 456-7890'
                        value={phone} 
                        setValue={setPhone}
                    />
                    <AppInput 
                        text='Country'
                        placeholder='Canada'
                        value={country}
                        setValue={setCountry}
                    />
                    <AppInput 
                        text='Province/State'
                        placeholder='Quebec'
                        value={province}
                        setValue={setProvince}
                    />
                    <AppInput 
                        text='City'
                        placeholder='Montreal'
                        value={city}
                        setValue={setCity}
                    />
                    <AppInput 
                        text='Postal Code/Zip'
                        placeholder='A1B 2C3'
                        value={postalCode}
                        setValue={setPostalCode}
                    />
                    <AppInput 
                        text='Company Name'
                        placeholder='Invoice Inc.'
                        value={companyName}
                        setValue={setCompanyName}
                    />
            </div>
           <div className="flex-row">
             <AppButton 
                text='Save Info'
                onClick={()=> saveInfo()}
             />
           </div>
           {/* <div className="danger-container">
               <h3>Delete my account</h3>
               <AppBtn 
                 className='danger'
                 text='Delete my account'
                 onClick={()=> setShowModal(true)}
                />
           </div> */}
           {/* <Popup 
                popupClassName='delete-account-modal' 
                setVisible={setShowModal} 
                visible={showModal}
                title='Delete my account'
           >
            <div className="div inner-delete-modal flex-col">
                <h3>Enter your account password to verify your identity.</h3>
                <AppInput
                    text='Password'
                    placeholder='Enter your password' 
                    className='secondary'
                    value={password}
                    setValue={setPassword}
                />
                <div className="flex-row gap-10">
                    <AppBtn 
                        className={`${password ? 'danger' : 'disabledbtn'}`}
                        text='Submit'
                        onClick={()=> signInUser()}
                    />
                    <AppBtn 
                        text='Cancel'
                        onClick={()=> setShowModal(false)}
                    />
                </div>
            </div>
           </Popup> */}
        </DashboardLayout>
    );
};

export default MyAccount;