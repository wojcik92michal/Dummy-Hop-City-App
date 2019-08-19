export const handleRequestError = (errorData: any) => {
    if (errorData.response) {
        console.error(errorData.response.status);
        console.error(errorData.response.data);
    } else {
        console.error(errorData);
    }
};
