import { turso } from "$lib/db";

export async function load() {
  let items = await turso.execute({
    sql: "SELECT * FROM items",
  });

  if (items) {
		return { items : items.rows };
	}

	error(404, 'Not found');
}
