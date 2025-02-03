import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { DotFilledIcon } from '@radix-ui/react-icons'
import React from 'react'

const TopUpForm = () => {
    const [amount, setAmount] = React.useState('')
    const handleChange = (e) => {
        setAmount(e.target.value)
    }
    
    const [paymentMethod, setPaymentMethod] = React.useState("RAZORPAY")

    const handlePaymentMethodChange = (value) => {
      setPaymentMethod(value)
    }

  return (
    <div className='pt-10 space-y-5'>
        
        <div>
            <h1 className='pb-1'>Enter Amount</h1>
            <Input onChange={handleChange} value={amount} className="py-7 text=lg" placeholder="$9999"/>
        </div>

        <div>
          <h1 className="pb-1">Select payment method</h1> 
          <RadioGroup onValueChange={(value) => handlePaymentMethodChange(value)} className="flex" defaultValue="RAZORPAY">

            <div className='flex itmes-center space-x-2 border p-3 px-5 rounded-md'>
              <RadioGroupItem icon={DotFilledIcon} className="h-9 w-9" value="RAZORPAY" id="r1"/>
            </div>
            <Label html="r1">
              <div className='bg-white rounded-md px-5 py-2 w-32'>
                <img src="" alt="Razorpay Image"/>
              </div>
            </Label>

          </RadioGroup>
        </div>

    </div>
  )
}

export default TopUpForm