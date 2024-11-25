import conf from "../conf/conf"
import {Client,Databases,Storage, Query, ID} from "appwrite"

export class Service {
    client =new Client()
    databases
    bucket
    constructor(){
        this.client
        .setEndpoint(conf.appwiteUrl)
        .setProject(conf.appwiteProductId)
        this.databases=new Databases(this.client)
        this.bucket=new Storage(this.client)

    }

    async createPost({title,content,featuredImage,slug,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwiteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: Error",error)
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwiteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: Error",error)
        }
    }

    async deletePost(slug){
        try {
            this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwiteCollectionId,
                slug)
            return true
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: Error",error)
            return false
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwiteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite Service :: getPost :: Error",error)
            return false
        }
    }
    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwiteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite Service :: getPosy :: Error",error)
            return false
            
        }
    }

    // upload File

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwiteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: createFile :: Error",error.message)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwiteBucketId,
                fileId
            )
        return true
        } catch (error) {
            console.log("Appwrite Service :: getFile :: Error",error)
            return false
        }
    }

    getfilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.appwiteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite Service :: getFilePreview :: Error",error)
            return false
        }
    }
}

const appwriteService=new Service()
export default appwriteService