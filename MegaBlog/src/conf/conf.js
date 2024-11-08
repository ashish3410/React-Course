
const conf={
    appwiteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwiteProductId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwiteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwiteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID)
}

export default conf