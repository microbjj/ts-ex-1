interface IComment {
    id: number
    email: string
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = async (url: string): Promise<IComment[]> => {
    const response = await fetch(url)

    if(!response.ok) {
        throw new Error('Ошибка запроса')
    }

    return await response.json()
}

getData(COMMENTS_URL)
    .then(data => {
        data.forEach(comment => console.log(`ID: ${comment.id}, Email: ${comment.email}`))
    })
    .catch(e => console.error(e))

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */