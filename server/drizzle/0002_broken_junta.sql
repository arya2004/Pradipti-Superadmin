ALTER TABLE `applications` MODIFY COLUMN `created_at` datetime NOT NULL DEFAULT '2025-04-14 10:02:39.733';--> statement-breakpoint
ALTER TABLE `applications` MODIFY COLUMN `updated_at` datetime NOT NULL DEFAULT '2025-04-14 10:02:39.733';--> statement-breakpoint
ALTER TABLE `students` MODIFY COLUMN `created_at` datetime NOT NULL DEFAULT '2025-04-14 10:02:39.732';--> statement-breakpoint
ALTER TABLE `students` MODIFY COLUMN `updated_at` datetime NOT NULL DEFAULT '2025-04-14 10:02:39.732';--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `created_at` datetime NOT NULL DEFAULT '2025-04-14 10:02:39.732';--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `updated_at` datetime NOT NULL DEFAULT '2025-04-14 10:02:39.732';