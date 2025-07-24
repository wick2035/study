// EXPO_PUBLIC_APPWRITE_PROJECT_ID=687f84e700380986d74f
// EXPO_PUBLIC_APPWRITE_ENDPOINT=https://nyc.cloud.appwrite.io/v1

import { Client, Account, Avatars, Databases } from "react-native-appwrite";

export const client = new Client()
  .setProject('6880e59300043df29e93')
  .setPlatform('com.uk.study');

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);




