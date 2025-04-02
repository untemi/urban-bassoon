import { turso } from "$lib/db";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const id = parseInt(params.id, 10);

  if (!isNaN(id)) {
    let items = await turso.execute({
      sql: "SELECT * FROM items WHERE id = ? LIMIT 1",
      args: [id],
    });

    if (items.rows[0]) {
      return items.rows[0];
    } else {
      error(404, `article with id of ${params.id} was NOT found.`);
    }
  } else {
    error(400, `"${params.id}" is NOT a valid ID.`);
  }
}
