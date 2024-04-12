import { defineDb, defineTable, column } from 'astro:db'

const Author = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
  },
})

const Comment = defineTable({
  columns: {
    authorId: column.text({ references: () => Author.columns.id }),
    body: column.text(),
  },
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Author,
    Comment,
  },
})
