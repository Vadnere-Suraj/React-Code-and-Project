import conf from "../conf/conf";
import { Client, Databases, Storage, ID, Query } from "appwrite";


export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteURL)
        .setProject(conf.projectID);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
           return await this.databases.createDocument(conf.databaseID, conf.collectionID, slug, {title, content, featuredImage, status, userId});
           
        } catch (error) {
            console.log("Error Caught During posting")
            return false;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(conf.databaseID, conf.collectionID, slug, {title, content, featuredImage, status});
        } catch (error) {
            console.log("Error Caught During updating")
            return false;
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.databaseID, conf.collectionID, slug);
            return true;
        } catch (error) {
            console.log("Error Caught During deleting post");
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.databaseID, conf.collectionID, slug);
        } catch (error) {
            console.log("Error Caught During finding post");
            return false;
        }
    }

    async getPosts(querry = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(conf.databaseID, conf.collectionID, querry)
        } catch (error) {
            console.log("Error Caught During finding posts");
            return false;
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.bukcetID, ID.unique(), file)
        } catch (error) {
            console.log("Error Caught During Uploading file");
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.bukcetID, fileId);
            return true;
        } catch (error) {
            console.log("Error Caught During deleting file");
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.bukcetID, fileId);
    }



}


const service = new Service();

export default service