import React, { useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import BuyPage from '../Components/BuyPage'
import { toast } from 'react-toastify'

const RegistrationForm = () => {
  const navigate = useNavigate()
  const formRef = useRef()
  const [enable, setEnable] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formHeight, setFormHeight] = useState('auto')
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  function scrollToBuy() {
    document.getElementById('buy-btns').scrollIntoView({ behavior: 'smooth' })
  }
  const labelMapping = {
    title: 'Title',
    firstName: 'First name',
    lastName: 'Last name',
    companyName: 'Company Name',
    jobTitle: 'Job title',
    email: 'Email Address',
    confirmEmail: 'Confirm Email Address',
    country: 'Country of current employment',
    city: 'City',
    nationality: 'Nationality',
    mobile: 'Mobile'
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      firstName: '',
      lastName: '',
      companyName: '',
      jobTitle: '',
      email: '',
      confirmEmail: '',
      city: '',
      mobile: '',
      country: '',
      nationality: '',
      clickedButton: ''
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref('email'), null], 'Emails must match')
        .required('Confirm Email is required'),
      mobile: Yup.string()
        .matches(/^\d{10}$/, 'Mobile must be 10 digits')
        .required('Mobile is required'),
      country: Yup.string().required('Country is required'),
      nationality: Yup.string().required('Nationality is required')
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        setLoading(true)
        const { clickedButton, ...rest } = values
        await axios
          .post('https://rising-production.up.railway.app/register', rest, {
            headers: { 'Content-Type': 'application/json' }
          })
          .then(res => {
            if (res?.data?.message === 'Registration successful') {
              setEnable(true)
              toast.success(res?.data?.message)
              scrollToBuy()
            }
          })
        setLoading(false)
      } catch (error) {
        setLoading(false)
        toast.error('Failed to register. Please try again.')
      }
      setSubmitting(false)
    }
  })
  useEffect(() => {
    if (formRef.current) {
      setFormHeight(`${formRef.current.clientHeight}px`)
    }
  }, [formik])

  return (
    <form onSubmit={formik.handleSubmit} className='space-y-4 font-gothamBook'>
      <div className='min-h-screen bg-[#101118] text-white flex flex-col items-center justify-center p-4'>
        <div className='w-full flex items-center justify-center flex-col gap-5'>
          <div className='flex justify-center items-center mt-5'>
            <a href='https://riyadhrising.net/'>
              <img
                src='images/RyhidRasing.png'
                className='w-[200px]'
                alt='Riyadh Rising'
              />
            </a>
          </div>
          <div className=' hidden md:flex justify-start relative w-1/2 items-center gap-4'>
            <div className='bg-gray-700 !h-14 !w-14 rounded-full flex items-center justify-center'>
              <h1 className='text-[#66FCF1] text-[22px] font-gothamUltra'>1</h1>
            </div>
            <div>
              <h1 className='font-gothamBook text-[22px] italic font-semibold'>
                Add your details
              </h1>
            </div>
            <div
              className='border-l  border-[#66FCF1] left-[28px] absolute top-20'
              style={{ height: formHeight }}
            ></div>
          </div>
          <div ref={formRef} className='w-full  md:w-[35%]'>
            <div key={'title'} className='mb-2'>
              <label
                htmlFor={'title'}
                className='block text-sm text-gray-300 mb-1'
              >
                Title
              </label>
              <select
                id={'title'}
                {...formik.getFieldProps('title')}
                className='w-full bg-gray-700 rounded-md p-2 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400'
              >
                <option value=''>Select title</option>
                {['Mr', 'Mrs'].map(country => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {formik.touched?.title && formik.errors?.title ? (
                <p className='text-red-500 text-sm'>{formik.errors?.title}</p>
              ) : null}
            </div>
            {[
              'firstName',
              'lastName',
              'companyName',
              'jobTitle',
              'email',
              'confirmEmail',
              'city',
              'mobile'
            ].map(field => (
              <div key={field} className='mb-2'>
                <label
                  htmlFor={field}
                  className='block text-base text-gray-300 mb-1'
                >
                  {labelMapping[field] ||
                    field.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <input
                  id={field}
                  type={
                    field.includes('email')
                      ? 'email'
                      : field === 'mobile'
                        ? 'tel'
                        : 'text'
                  }
                  {...formik.getFieldProps(field)}
                  className='w-full bg-gray-700 rounded-md p-2 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400'
                />
                {formik.touched[field] && formik.errors[field] ? (
                  <p className='text-red-500 text-sm'>{formik.errors[field]}</p>
                ) : null}
              </div>
            ))}
            {['country', 'nationality'].map(field => (
              <div key={field} className='mb-2'>
                <label
                  htmlFor={field}
                  className='block text-base text-gray-300 mb-1'
                >
                  {labelMapping[field] ||
                    field.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <select
                  id={field}
                  {...formik.getFieldProps(field)}
                  className='w-full bg-gray-700 rounded-md p-2 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400'
                >
                  <option value=''>Select {field}</option>
                  {[
                    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
                    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
                    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
                    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
                    "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Democratic Republic of the Congo",
                    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
                    "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
                    "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia",
                    "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
                    "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
                    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
                    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru",
                    "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman",
                    "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
                    "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
                    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
                    "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden",
                    "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
                    "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
                    "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
                  ].map(
                    country => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    )
                  )}
                </select>
                {formik.touched[field] && formik.errors[field] ? (
                  <p className='text-red-500 text-sm'>{formik.errors[field]}</p>
                ) : null}
              </div>
            ))}
            {formik.errors.submit && (
              <p className='text-red-500 text-center'>{formik.errors.submit}</p>
            )}
          </div>
          <div>
            <button
              className={`relative z-10 w-full text-black font-bold py-2 px-8 rounded-xl shadow-lg text-[16px] md:text-[22px] lg:text-[25px] 2xl:text-[30px] font-gothamBook italic transition-colors flex items-center justify-center ${loading
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-yellow-400 hover:bg-yellow-300 cursor-pointer'
                }`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className='animate-spin h-5 w-5 mr-2 text-black'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3 3 3v-4z'
                    ></path>
                  </svg>
                  Loading...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </div>
          <div className='hidden md:flex justify-start w-1/2 items-center gap-4'>
            <div className='bg-gray-700 !h-14 !w-14 rounded-full flex items-center justify-center'>
              <h1 className='text-[#66FCF1] text-[22px] font-gothamUltra'>2</h1>
            </div>
            <div>
              <h1 className='font-gothamBook text-[22px] italic font-semibold'>
                Choose your package
              </h1>
            </div>
          </div>
        </div>
        <div>
          <BuyPage enable={enable} />
        </div>
      </div>
    </form>
  )
}

export default RegistrationForm
