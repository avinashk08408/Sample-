const { isSupabaseConfigured, listRegistrations } = require("./_lib");

/**
 * Public leaderboard data. Deliberately excludes email, phone, roll number,
 * password hashes, problem statements, and solutions.
 */
module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed." });
  }
  if (!isSupabaseConfigured()) {
    return res.status(503).json({ error: "Scoresheet is not configured on the server." });
  }
  try {
    const registrations = await listRegistrations();
    const teams = registrations.map((row) => ({
      registrationId: row.registrationId,
      teamName: row.teamName,
      domain: row.domain,
      mark: row.mark === null || row.mark === undefined ? null : Number(row.mark),
      updatedAt: row.updatedAt || row.submittedAtWork || row.submittedAt || null,
    }));
    res.setHeader("Cache-Control", "no-store, max-age=0");
    return res.status(200).json({ teams });
  } catch (error) {
    console.error("public scoresheet failed", error);
    return res.status(503).json({ error: "Could not load the scoresheet." });
  }
};
