import { createClient, type ClientConfig } from "next-sanity";

const sanityClient :ClientConfig ={

    projectId:"cta4ni3f",
    dataset:"production",
    apiVersion:"2025-01-03",
    useCdn: true,
}

export default createClient(sanityClient);
