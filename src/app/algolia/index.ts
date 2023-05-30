import algoliasearch from "algoliasearch";

export type TAlgoliaIndices = 'users'
enum AlogliaIndices {
    Users = 'users'
}
export const alogliaSearchClient = algoliasearch(
    'V8YH0FYWI9',
    'd272af36a49bbdcc053333c66e9eef89',
)
export const usersIndex = alogliaSearchClient.initIndex(AlogliaIndices.Users)
// export const invoicesIndex = alogliaSearchClient.initIndex('invoices_index')
// export const estimatesIndex = alogliaSearchClient.initIndex('estimates_index')
// export const contactsIndex = alogliaSearchClient.initIndex('contacts_index')
// export const paymentsIndex = alogliaSearchClient.initIndex('payments_index')
// export const emailsIndex = alogliaSearchClient.initIndex('emails_index')
