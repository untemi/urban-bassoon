import { turso } from "$lib/db";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const id = parseInt(params.id, 10);

  if (!isNaN(id)) {
    let items = await turso.execute({
    sql: "SELECT * FROM items WHERE category = ?",
      args: [id],
    });

    if (items) {
		  return { items : items.rows };
    } else {
      error(404, `category with id of ${params.id} was NOT found.`);
    }
  } else {
    error(400, `"${params.id}" is NOT a valid ID.`);
  }


	error(404, 'Not found');
}
