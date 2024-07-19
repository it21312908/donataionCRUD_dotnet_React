﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace crud_codeAffection.Models
{
	public class DCandidate
	{
		[Key]
		public int id { get; set; }

		[Column(TypeName = "nvarchar(100)")]
		public string fullName { get; set; }

		[Column(TypeName = "nvarchar(16)")]
		public string mobile { get; set; }

		[Column(TypeName = "nvarchar(100)")]
		public string email { get; set; }

		public int age { get; set; }

		[Column(TypeName = "nvarchar(3)")]
		public string bloodGroup { get; set; }

		[Column(TypeName = "nvarchar(100)")]
		public string address { get; set; }
	}
}
