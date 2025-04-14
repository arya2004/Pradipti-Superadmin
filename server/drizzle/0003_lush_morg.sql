ALTER TABLE `applications` MODIFY COLUMN `created_at` datetime NOT NULL DEFAULT '2025-04-14 10:29:48.390';--> statement-breakpoint
ALTER TABLE `applications` MODIFY COLUMN `updated_at` datetime NOT NULL DEFAULT '2025-04-14 10:29:48.390';--> statement-breakpoint
ALTER TABLE `students` MODIFY COLUMN `created_at` datetime NOT NULL DEFAULT '2025-04-14 10:29:48.390';--> statement-breakpoint
ALTER TABLE `students` MODIFY COLUMN `updated_at` datetime NOT NULL DEFAULT '2025-04-14 10:29:48.390';--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `created_at` datetime NOT NULL DEFAULT '2025-04-14 10:29:48.389';--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `updated_at` datetime NOT NULL DEFAULT '2025-04-14 10:29:48.389';--> statement-breakpoint
ALTER TABLE `internship_programs` ADD `institution_id` bigint NOT NULL;--> statement-breakpoint
ALTER TABLE `internship_programs` ADD CONSTRAINT `internship_programs_institution_id_institutions_institution_id_fk` FOREIGN KEY (`institution_id`) REFERENCES `institutions`(`institution_id`) ON DELETE no action ON UPDATE no action;