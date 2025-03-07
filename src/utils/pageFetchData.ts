import axiosClient from "@/axios/axios-client";

export const getPageFetchData = async (endpoints: string[]) => {
   try {
      //create     array of promises
      const promises = endpoints.map((endpoint) => axiosClient.get(endpoint));
      //execute promises
      const responses = await Promise.all(promises);

      return responses.map((res) => res.data.data);
   } catch (error) {
      console.log(error);
   }
};
