import axios from "axios";

const createUser = async({name , password ,email}) => {
   try {
    const res = await axios.post("http://localhost:5000/api/signup" , {
        name,
        password,
        email
    });
    console.log("user Created Successfully");
    return res;   
   } catch (error) {
    console.log("some error in axios post call" , error);
   }
};  

const login = async ({email , password}) => {
    try {
        const res = await axios.post("http://localhost:5000/api/login",{
            email,
            password
        });
        console.log("Login SuccessFully");
        return res;
        
    } catch (error) {
        console.log("some error in axios post call" , error);
    }
}
export default {createUser, login};