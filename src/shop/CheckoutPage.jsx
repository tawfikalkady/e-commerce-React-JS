import React,{useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
import '../components/modal.css'
import { useLocation, useNavigate } from 'react-router-dom'

const CheckoutPage = () => {
  const [show, setShow]=useState(false)
  const [activeTab, setActiveTab]=useState('visa')
  
  //handle tab change
  const handleTabChange=(tabId) => {
    setActiveTab(tabId)
  }
  
  const handleShow= () => setShow(true)
  const handleClose= () => setShow(false)
  
  //direct to home page
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.form?.pathname || '/'

  const handleOrderConfirm=() => {
    alert('your order is placed successfully!')
    localStorage.removeItem('cart')
    navigate(from, {replace:true})
  }
  
    return (
    <div className='modalCard'>
        <Button variant='primary' className='py-2' onClick={handleShow}>proceed to checkout</Button>
    <Modal
    show={show}
    onHide={handleClose}
    animation={false}
    className='modal fade'
    centered
    >

        <div className="modal-dialog">
            <h5 className="px-3 mb-3">select your payment method</h5>
            <div className="modal-content">
                <div className="modal-body">
                    <div className="tabs mt-3">
                        <ul className="nav nav-tabs" id='myTab' role='tablist'>
                            <li className="nav-item" role='presentation'>
                                <a className={`nav-link ${activeTab === 'visa' ? 'active' : ''}`} 
                                id='visa-tab'
                                data-toggle='tab'
                                role='tab'
                                aria-controls='visa'
                                aria-selected={activeTab ==='visa'}
                                onClick={() => handleTabChange('visa')}
                                href="#visa"><img src="https://i.imgur.com/sB4jftM.png" alt="" width='80' />
                                </a>
                            </li>
                            <li className="nav-item" role='presentation'>
                                <a className={`nav-link ${activeTab  === 'paypal' ? 'active' : ''}`} 
                                
                                id='paypal-tab'
                                data-toggle='tab'
                                role='tab'
                                aria-controls='paypal'
                                aria-selected={activeTab ==='paypal'}
                                onClick={() => handleTabChange('paypal')}
                                href="#paypal"><img src="https://i.imgur.com/yK7EDD1.png" alt="" width='80' 
                                />                                
                                </a>
                            </li>
                        </ul>

                        {/* content */}

                        <div className="tab-content" id='myTabContent'>
                            {/* visa content */}
                            <div className={`tab-pane fade ${activeTab === 'visa' ? 'show active' : ''}`}
                            id='visa'
                            role='tabpanel'
                            aria-labelledby='visa-tab'
                            >
                                {/* visa tab content */}
                                <div className="mt-4 mx-4">
                                    <div className="text-center">
                                        <h5>credit card</h5>
                                    </div>
                                        <div className="form mt-3">
                                            <div className="inputbox">
                                                <input type="text" name='name' id='name' className='form-control' 
                                                required />
                                                <span>cardholder name</span>
                                            </div>
                                            <div className="inputbox">
                                                <input type="text" name='number' id='number'
                                                min='1' max='999' className='form-control' required />
                                                <span>card number</span> <i className="fa fa-eye"></i>
                                            </div>
                                            <div className="d-flex flex-row">
                                                <div className="inputbox">
                                                    <input type='text' name='number' id='number'
                                                    min='1' max='999' className='form-control' required />
                                                    <span>expiration date</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type='text' name='number' id='number'
                                                    min='1' max='999' className='form-control' required />
                                                    <span>cvv</span>
                                                </div>
                                            </div>
                                            <div className="px-5 pay">
                                                <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>order now</button>
                                            </div>
                                        </div>
                                </div>

                            </div>


                            {/* paypal content */}
                            <div className={`tab-pane fade ${activeTab === 'paypal' ? 'show active' : ''}`}
                            id='paypal'
                            role='tabpanel'
                            aria-labelledby='paypal-tab'
                            >
                                <div className="mt-4 mx-4">
                                    <div className="text-center">
                                        <h5>paypal account info</h5>
                                    </div>
                                        <div className="form mt-3">
                                            <div className="inputbox">
                                                <input type="text" name='name' id='name' className='form-control' 
                                                required />
                                                <span>enter your email</span>
                                            </div>
                                            <div className="inputbox">
                                                <input type="text" name='number' id='number'
                                                min='1' max='999' className='form-control' required />
                                                <span>your name</span> 
                                            </div>
                                                <div className="d-flex flex-row">
                                                    <div className="inputbox">
                                                        <input type='text' name='number' id='number'
                                                        min='1' max='999' className='form-control' required />
                                                        <span>extra info</span>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input type='text' name='number' id='number'
                                                        min='1' max='999' className='form-control' required />
                                                        <span></span>
                                                    </div>
                                                </div>
                                            <div className="px-5 pay">
                                                <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>add paypal</button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>

                        {/* payment disclaimer */}
                        <p className='mt-3 px-4 p-Disclaimer'><em>payment disclaimer: </em> in no event shall payment or partial payment by owner for any
                        material or service </p>
                    </div>
                </div>
            </div>
        </div>
    </Modal>
    
    </div>
  )
}

export default CheckoutPage