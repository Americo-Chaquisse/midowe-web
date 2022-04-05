terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  backend "s3" {
    bucket         = "exodus-tf-state"
    key            = "midowe-tf-backed/terraform.tfstate"
    encrypt        = true
    region         = "af-south-1"
    dynamodb_table = "exodus-tf-state-locking"
  }

  required_version = ">= 1.1.0"
}

# Main region where the resources should be created in
# (Should be close to the location of your viewers)
provider "aws" {
  region = "af-south-1"
  profile = "default"
}

# Provider used for creating the Lambda@Edge function which must be deployed
# to us-east-1 region (Should not be changed)
provider "aws" {
  alias  = "global_region"
  region = "us-east-1"
}

module "tf_next" {
  source = "milliHQ/next-js/aws"

  next_tf_dir                    = "../.next-tf"
  cloudfront_aliases             = ["midowe.co.mz"]
  cloudfront_acm_certificate_arn = "arn:aws:acm:us-east-1:375555142632:certificate/9f8cdfab-0462-43d5-9677-5e4dfd7f127f"

  providers = {
    aws.global_region = aws.global_region
  }
}
