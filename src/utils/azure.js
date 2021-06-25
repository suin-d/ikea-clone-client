import { BlobServiceClient } from '@azure/storage-blob';

const sasToken = process.env.REACT_APP_AZURE_SAS_TOKEN;
const containerName = `reviews`;
const storageAccountName = process.env.REACT_APP_AZURE_STOTAGE_ACCOUNT_NAME;

export const isStorageConfigured = () => {
  return !storageAccountName || !sasToken ? false : true;
};

const createBlobInContainer = async (containerClient, file) => {
  console.log(sasToken, storageAccountName);
  const newFileName = new Date().getTime() + file.name;
  const blobClient = containerClient.getBlockBlobClient(newFileName);

  //   const options = {blobHTTPHeaders: {blobContentType: file.type}};
  try {
    await blobClient.uploadData(file);
    return newFileName;
  } catch (e) {
    throw new Error('ERROR!');
  }
};

// <snippet_uploadFileToBlob>
const uploadFileToBlob = async file => {
  if (!file) return [];

  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );

  const containerClient = blobService.getContainerClient(containerName);

  return await createBlobInContainer(containerClient, file);
};

export default uploadFileToBlob;
