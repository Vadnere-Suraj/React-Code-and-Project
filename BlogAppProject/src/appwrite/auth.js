import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client()
    account;

    constructor(){
        this.client.setEndpoint(conf.appwriteURL).setProject(conf.projectID);
        
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
       
        // eslint-disable-next-line no-useless-catch
        try {
            const userAccount = this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                //Another Mrthod     
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.createEmailPasswordSession(email, password);
            
        } catch (error) {
            
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        // eslint-disable-next-line no-useless-catch
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authservice = new AuthService();

export default authservice