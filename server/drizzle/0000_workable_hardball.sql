CREATE TABLE `admin_users` (
	`user_id` varchar(50) NOT NULL,
	`user_name` varchar(100) NOT NULL,
	`actions` varchar(100),
	`access` varchar(50),
	CONSTRAINT `admin_users_user_id` PRIMARY KEY(`user_id`)
);
--> statement-breakpoint
CREATE TABLE `college_programs` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`college_id` varchar(20) NOT NULL,
	`program` varchar(10) NOT NULL,
	CONSTRAINT `college_programs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `college_admins` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`college_id` varchar(20) NOT NULL,
	`name` varchar(150) NOT NULL,
	`user_id` varchar(50),
	`email` varchar(150) NOT NULL,
	`dateAdded` varchar(50) NOT NULL,
	`role` varchar(50) NOT NULL,
	`status` varchar(50) DEFAULT 'active',
	CONSTRAINT `college_admins_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `college_details` (
	`id` varchar(20) NOT NULL,
	`name` varchar(200) NOT NULL,
	`location` varchar(100) NOT NULL,
	`email` varchar(150) NOT NULL,
	`registeredStudents` int NOT NULL,
	`logo` varchar(300),
	`created_at` datetime NOT NULL,
	`updated_at` datetime NOT NULL,
	CONSTRAINT `college_details_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `college_program_details` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`college_id` varchar(20) NOT NULL,
	`name` varchar(20) NOT NULL,
	`code` varchar(20) NOT NULL,
	`fullName` varchar(200) NOT NULL,
	CONSTRAINT `college_program_details_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `colleges` (
	`id` varchar(20) NOT NULL,
	`name` varchar(200) NOT NULL,
	`state` varchar(10) NOT NULL,
	`city` varchar(50) NOT NULL,
	`status` varchar(50) NOT NULL,
	`created_at` datetime NOT NULL,
	`updated_at` datetime NOT NULL,
	CONSTRAINT `colleges_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `mou_documents` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`college_id` varchar(20) NOT NULL,
	`status` varchar(50) DEFAULT 'pending',
	`lastUpdated` date,
	`expiryDate` date,
	CONSTRAINT `mou_documents_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `notifications` (
	`id` varchar(50) NOT NULL,
	`title` varchar(150) NOT NULL,
	`from` varchar(100),
	`message` varchar(500) NOT NULL,
	`date` varchar(30) NOT NULL,
	`time` varchar(20) NOT NULL,
	`category` varchar(100) NOT NULL,
	`priority` varchar(50) NOT NULL,
	`read` boolean DEFAULT false,
	CONSTRAINT `notifications_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `program_details` (
	`courseCode` varchar(20) NOT NULL,
	`title` varchar(200) NOT NULL,
	`startDate` varchar(50) NOT NULL,
	`duration` varchar(50) NOT NULL,
	`location` varchar(100) NOT NULL,
	`applyBy` varchar(50) NOT NULL,
	`img` varchar(300),
	`description` text NOT NULL,
	CONSTRAINT `program_details_courseCode` PRIMARY KEY(`courseCode`)
);
--> statement-breakpoint
CREATE TABLE `programs_intern` (
	`id` varchar(30) NOT NULL,
	`name` varchar(200) NOT NULL,
	`applications` int NOT NULL,
	`slotsRemaining` varchar(20) NOT NULL,
	CONSTRAINT `programs_intern_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `students` (
	`id` varchar(30) NOT NULL,
	`name` varchar(150) NOT NULL,
	`attended` boolean NOT NULL,
	`status` varchar(50) NOT NULL,
	CONSTRAINT `students_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`email` varchar(150) NOT NULL,
	`name` varchar(150) NOT NULL,
	`role` varchar(50) NOT NULL,
	CONSTRAINT `users_email` PRIMARY KEY(`email`)
);
--> statement-breakpoint
ALTER TABLE `college_programs` ADD CONSTRAINT `fk_cp_college` FOREIGN KEY (`college_id`) REFERENCES `colleges`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `college_admins` ADD CONSTRAINT `fk_ca_college` FOREIGN KEY (`college_id`) REFERENCES `college_details`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `college_program_details` ADD CONSTRAINT `fk_cpd_college` FOREIGN KEY (`college_id`) REFERENCES `college_details`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `mou_documents` ADD CONSTRAINT `fk_mou_college` FOREIGN KEY (`college_id`) REFERENCES `college_details`(`id`) ON DELETE no action ON UPDATE no action;