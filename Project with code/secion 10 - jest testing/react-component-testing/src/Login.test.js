import { fireEvent, render, screen } from '@testing-library/react';

import Login from './Login';

describe("Login Testing ",()=> {


    test('React Login test with success', async() => {
        render(<Login />);
        // succcessfully login testing code 
      
        const email = screen.getByPlaceholderText('enter emailid');
        fireEvent.change(email,{target:{value:"admin@gmail.com"}});
      
        const password = screen.getByPlaceholderText('enter password');
        fireEvent.change(password,{target:{value:"admin@123"}});
         
        const submitButton = screen.getByTestId('submit-button');
        fireEvent.submit(submitButton);
      
        const result1 = screen.getByTestId("result");
        console.log(result1.textContent);
        expect(result1.textContent).toEqual("successfully login");      
        
      });


    test('React Login test with failure', async() => {
        render(<Login />);
        // failure login testing code 
      
        const email = screen.getByPlaceholderText('enter emailid');
        fireEvent.change(email,{target:{value:"admin@gmail.com"}});
      
        const password = screen.getByPlaceholderText('enter password');
        fireEvent.change(password,{target:{value:"admin@1234"}});
         
        const submitButton = screen.getByTestId('submit-button');
        fireEvent.submit(submitButton);
      
        const result1 = screen.getByTestId("result");
        console.log(result1.textContent);
        expect(result1.textContent).toEqual("failure try once again");
        
      });


})

