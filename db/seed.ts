import { db, Comment, Author } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Author).values([{ id: '1' }, { id: '2' }])
  await db.insert(Comment).values([
    {
      authorId: '1',
      body: 'This is a comment',
    },
    {
      authorId: '2',
      body: 'This is another comment',
    },
  ])
}
