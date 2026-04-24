-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_EventRsvp" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "joinedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "EventRsvp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EventRsvp_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_EventRsvp" ("eventId", "id", "joinedAt", "userId") SELECT "eventId", "id", "joinedAt", "userId" FROM "EventRsvp";
DROP TABLE "EventRsvp";
ALTER TABLE "new_EventRsvp" RENAME TO "EventRsvp";
CREATE UNIQUE INDEX "EventRsvp_id_key" ON "EventRsvp"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
