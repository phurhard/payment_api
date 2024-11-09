import React, { useState } from 'react';                     
const InitializePayment: React.FC = () => {                                                
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [callbackUrl, setCallbackUrl] = useState('');
    const [response, setResponse] = useState<any>(null);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();                                                                                                                               
        const res = await fetch('/api/paystack/initialize', {                                                                                             
            method: 'POST',                                                                                                                               
            headers: {                                                                                                                                    
                'Content-Type': 'application/json',                                                                                                       
            },                                                                                                                                            
            body: JSON.stringify({ email, amount: parseInt(amount), name, callbackUrl }),                                                                 
        });                                                                                                                                               
        const data = await res.json();                                                                                                                    
        setResponse(data);                                                                                                                                
    };                                                                                                                                                    
                                                                                                                                                          
    return (                                                                                                                                              
        <div>                                                                                                                                             
            <h2>Initialize Payment</h2>                                                                                                                   
            <form onSubmit={handleSubmit}>                                                                                                                
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />                              
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />                          
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />                                  
                <input type="url" value={callbackUrl} onChange={(e) => setCallbackUrl(e.target.value)} placeholder="Callback URL" />                      
                <button type="submit">Initialize Payment</button>                                                                                         
            </form>                                                                                                                                       
            {response && <div>{JSON.stringify(response)}</div>}                                                                                           
        </div>                                                                                                                                            
    );                                                                                                                                                    
};
export default InitializePayment;