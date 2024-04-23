`use server`

export const submitAnswer = async (id: number) => {
    console.log(`I am storing the answer with id: ${id}`)

    return Promise.resolve({ok: true})
}