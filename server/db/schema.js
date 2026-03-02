const { pgTable, text, timestamp, boolean } = require("drizzle-orm/pg-core");

const learner = pgTable("learner", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    emailVerified: boolean("emailVerified").notNull(),
    image: text("image"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
});

const account = pgTable("account", {
    id: text("id").primaryKey(),
    accountId: text("accountId").notNull(),
    providerId: text("providerId").notNull(),
    learnerId: text("learnerId")
        .notNull()
        .references(() => learner.id, { onDelete: "cascade" }),
    type: text("type").notNull(),
    expiresAt: timestamp("expiresAt"),
    accessToken: text("accessToken"),
    refreshToken: text("refreshToken"),
    password: text("password"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
});

module.exports = { learner, account };
