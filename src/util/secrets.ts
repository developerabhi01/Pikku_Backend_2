
// export const MONGODB_URI = process.env["MONGODB_URI"];
export const MONGODB_URI = "mongodb+srv://pikku:Pikku123@pikku.jqepz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

if (!MONGODB_URI) {
    console.log("No mongo connection string. Set MONGODB_URI environment variable.");
    process.exit(1);
}

// export const JWT_SECRET = process.env["JWT_SECRET"];
export const JWT_SECRET = "absbcggdh";


if (!JWT_SECRET) {
    console.log("No JWT secret string. Set JWT_SECRET environment variable.");
    process.exit(1);
}
