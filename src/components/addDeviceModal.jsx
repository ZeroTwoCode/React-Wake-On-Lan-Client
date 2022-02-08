import { useState, forwardRef, useImperativeHandle } from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const AddDeviceModal = forwardRef((props, ref) => {

    const { register, handleSubmit, reset } = useForm()
    const [ visible, setVisible ] = useState(false)

    useImperativeHandle(ref, () => ({
        show() {
            setVisible(true)
        }
    }))

    const closeForm = () => {
        reset({name: '', mac: ''})
        setVisible(false)
    }

    const saveDevice = data => {
        //Send to create device API endpoint

        closeForm()
    }

    return (
        <div className={visible ? 'block' : 'hidden'}>
            <form onSubmit={ handleSubmit(saveDevice) } className='fixed flex flex-wrap items-center justify-center gap-3 w-[90%] rounded-lg shadow-lg p-5 z-50 bg-gray-100 max-w-screen-md left-1/2 translate-x-[-50%] translate-y-[-50%] top-1/2'>
                <p className="w-full">Add Device</p>
                <FontAwesomeIcon onClick={() => {closeForm()}} className="cursor-pointer absolute top-4 right-5 mb-3 text-2xl text-gray-500" icon={faTimes} />
                <label className="w-30 lbl-primary">
                Device Name
                </label>
                <input
                    { ...register('name') }
                    type='text'
                    className='min-w-[140px] w-3/4 txt-primary'
                />
                <label className="w-30 lbl-primary">
                Mac address
                </label>
                <input
                    { ...register('mac') }
                    type='text'
                    placeholder='xx:xx:xx:xx:xx:xx'
                    className='min-w-[140px] w-3/4 txt-primary'
                />
                <input
                    type="submit"
                    value="Save Device"
                    className="btn-primary"
                />
            </form>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </div>
    )
})

export default AddDeviceModal