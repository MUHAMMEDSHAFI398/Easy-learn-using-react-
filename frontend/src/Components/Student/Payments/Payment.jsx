import React, { useEffect, useState } from 'react';
import { feePaymentAPI, getFeeDetailsAPI, verifyPaymentAPI } from '../../../Services/StudentServices';
import { useSelector } from 'react-redux';
// import Razorpay from 'react-razorpay';
import useRazorpay from "react-razorpay";
import { message } from "antd";
import { useNavigate } from 'react-router-dom';
import { razropaykeyId } from '../../../Constants/Constants';





import './Payment.css'


function Payment() {

    const batchId = useSelector(state => state.studentData.studentData.batch)
    const [feeDetails, setFeeDetails] = useState({ totalFee: "", pendingFee: "", installmentAmount: "" })
    const [selectedOption, setSelectedOption] = useState('One time settlement');
    const Razorpay = useRazorpay();
    const navigate = useNavigate()


    useEffect(() => {
        if (batchId !== undefined) {
            const headers = {
                headers: {
                    Authorization: localStorage.getItem('studentToken')
                }
            };

            getFeeDetailsAPI(batchId, headers)
                .then(response => {
                    if (response.status === 200) {
                        setFeeDetails(response.data);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [batchId])

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handlePayment = () => {
        let option;
        if (selectedOption === "One time settlement")
            option="One time"
        else
        option= "Installlment"
        const headers = {
            headers: {
                Authorization: localStorage.getItem('studentToken')
            }
        }
        feePaymentAPI(batchId,{option}, headers).then((res) => {
            const options = {
                key: razropaykeyId,
                amount: res.data.order.amount,
                currency: "INR",
                name: "Easy learn",
                description: "Test Transaction",
                image: "/images/logo-project.png",
                order_id: res.data.id,
                handler: function (response) {
                    verifyPayment(response, res);
                },
                prefill: {
                    name: "Easy learn",   
                    email: "easylearn@gmail.com",
                    contact: "9999999999",
                  },
                  notes: {
                    address: "Razorpay Corporate Office",
                  },
                  theme: {
                    color: "#28a745",
                  },
                };
                const rzp1 = new Razorpay(options);

                rzp1.on("payment.failed", function () {
                    message.error("payment failed");
                    navigate("/students/payments");
                  });
                  rzp1.open();
        })

    }

    const verifyPayment = (payment, details) => {
       verifyPaymentAPI({ payment, details }).then((response) => {
            message.success("payment completed successfully");
          })
          .catch(() => {
            message.error("Payment failed");
          });
      };



    return (
        <div className='container'>
            <div className='container paymentParent'>
                <div className='d-flex justify-content-end'>
                    <button onClick={openModal} className='btn btn-success me-3 mb-2'> Completer your Payment</button>
                    {isModalOpen && (
                        <div className="ModalPayment">
                            <div className="modalPayment-content">
                                <span className="close" onClick={closeModal}>&times;</span>
                                <div className='container mt-4'>
                                    <div className='d-flex justify-content-center  mt-3'>
                                        <p><strong>Fee payment</strong></p>
                                    </div>
                                    <div className='table-responsive'>

                                        <table class="table table-borderless">

                                            <tbody>
                                                <tr>
                                                    <th scope="row">choose an option</th>
                                                    <td>
                                                        <div className='d-flex'>
                                                            <input
                                                                value="One time settlement"
                                                                checked={selectedOption === "One time settlement"}
                                                                onChange={handleOptionChange}
                                                                type="radio" id="option1"
                                                                name="options"
                                                            />
                                                            <label className='ms-1' for="option1">One time settlment</label>

                                                        </div>
                                                        <div className='d-flex'>
                                                            <input
                                                                value="Installment"
                                                                checked={selectedOption === "Installment"}
                                                                onChange={handleOptionChange}
                                                                type="radio"
                                                                id="option1"
                                                                name="options"
                                                            />
                                                            <label className='ms-1' for="option2">Installment</label>
                                                        </div>


                                                    </td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">Total course fee</th>
                                                    <td>₹ {feeDetails.totalFee}</td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">Pending amount</th>
                                                    <td>₹ {feeDetails.pendingFee}</td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">Amount to pay now</th>
                                                    <td> <strong>
                                                        ₹ {
                                                            selectedOption === "One time settlement" ?
                                                                feeDetails.pendingFee :
                                                                feeDetails.installmentAmount
                                                        }
                                                    </strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className='d-flex justify-content-center'>
                                            <button onClick={handlePayment} className='btn btn-success'>Make payment</button>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className='container d-flex flex-wrap justify-content-between align-items-center'>
                    <div className='flexchildPayment' >
                        <div className='d-flex justify-content-center align-items-center mt-3'>
                            <h5>Payment history</h5>
                        </div>
                    </div>
                    <div className='flexchildPayment' >
                        <div className='d-flex justify-content-center align-items-center mt-3'>
                            <h5>Fee sttructure</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
