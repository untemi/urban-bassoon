import { turso } from "$lib/db";
import { error } from "@sveltejs/kit";

export async function load() {
  let categorys = await turso.execute({
    sql: "SELECT * FROM categorys ORDER BY id DESC",
  });

  if (categorys) {
		return { categorys : categorys.rows };
	}

	error(404, 'Not found');
}
