

import Prismic from '@prismicio/client'


export default function getPrismicClient(req?:unknown) {


    const prismic = Prismic.client(
        process.env.PRISMIC_URL,
        {
            accessToken:process.env.PRISMIC,
            req,
        }
    )

    return prismic

}