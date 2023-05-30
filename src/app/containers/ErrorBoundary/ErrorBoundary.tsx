import AppButton from 'app/components/ui/Buttons/AppButton';
import ImgLoaded from 'app/components/ui/ImgLoaded/ImgLoaded';
import React from 'react'
import { Link } from 'react-router-dom';
import './ErrorBoundary.css'
interface Props {

}

class ErrorBoundary extends React.Component {

  constructor(props: Props) {
    super(props);
    this.state  = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    //send email to admin with error log
    // const user = firebase.auth().currentUser
    // const docID = db.collection('errorLogs').doc().id
    // setDB('errorLogs', docID, {
    //   userID: user?.uid ?? "Guest User",
    //   dateCreated: new Date(),
    //   errorMessage: errorInfo
    // })
  }

  render() {
    // @ts-expect-error
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="inner-boundary">
            <ImgLoaded src={require('app/assets/error-boundary.png')} alt=""/>
            <h1>An error occured on this page</h1>
            <span>Don't worry we're working on fixing this bug so it doesn't happen again.</span>
            <a href="https://invoice-ts.vercel.app/">
              <AppButton 
                icon='home'
                text='Back home'
              />
            </a>
          </div>
        </div>
      )
    }
    // @ts-expect-error
    return this.props.children; 
  }
}

export default ErrorBoundary