import React, { useState } from 'react';                                                                                                                  
                                                                                                                                                           
 const VerifyPayment: React.FC = () => {                                                                                                                   
     const [reference, setReference] = useState('');                                                                                                       
     const [response, setResponse] = useState<any>(null);                                                                                                  
                                                                                                                                                           
     const handleVerify = async () => {                                                                                                                    
         const res = await fetch(`/api/paystack/verify?reference=${reference}`);                                                                           
         const data = await res.json();                                                                                                                    
         setResponse(data);                                                                                                                                
     };                                                                                                                                                    
                                                                                                                                                           
     return (                                                                                                                                              
         <div>                                                                                                                                             
             <h2>Verify Payment</h2>                                                                                                                       
             <input type="text" value={reference} onChange={(e) => setReference(e.target.value)} placeholder="Reference" required />                       
             <button onClick={handleVerify}>Verify Payment</button>                                                                                        
             {response && <div>{JSON.stringify(response)}</div>}                                                                                           
         </div>                                                                                                                                            
     );                                                                                                                                                    
 };                                                                                                                                                        
                                                                                                                                                           
 export default VerifyPayment;
 