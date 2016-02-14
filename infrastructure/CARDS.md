> It's been a long 2 days. Please forgive typos and misssspellings

# C.A.R.D.S.

C.A.R.D.S. is a frameword of infrastrcuture used at IDX Broker. Developed by Derek Rose

  - **C**apacity (at lowest cost)
  - **A**vailability
  - **R**edundancy
  - **D**isaster Recovery
  - **S**ecurity

## Specifics to this project
Capacity is an an educated guess at this point but, barring the onslaught of bots, the free teir of Amazon should provide ample resouces for this use. The T2.Micro instance has the ability to provide extra CPU cycles for short bursts.

At this scale (and within the constraints of the AWS free tier) we can consider Availability and Redudancy the same... in that there isn't much. Basically if things hit the fan we're couning on DR.

Disaster Recovery is in the form of gross backups. All primary disks are cloned on a daily basis. Additionally the MySQL database that drives wordpress and which stores incident data is backed up to S3.

Four days worth of drive snapshots are stored in case issues are not immediatly found.

Since the data in mysql is the real value of this system the DR is more redundant. Versioning is enabled on the S3 bucket. So each day when the backup is overwritten the previous version is save. As a measure of cost control these versions are transitioned to the less expensive "reduced redundancy" tier after 30 days and deletely completely after 90 days.