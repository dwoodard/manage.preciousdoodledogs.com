# Dog
- id
- breeder_id - is the  Auth::User()->id
- name - is the name of the dog
- gender (male/female) 
- outside_stud (null if female) - is an outside stud (no breeder_id)
- birthday
- breed
- generation
- size
- retired_at 
- timestamps
-- (calc) age - (now - birthday)
-- (calc) weeks_between_heats = $dog->breeding->heat_at[n] - $dog->breeding->heat_at[n+1]
-- (calc) days_left = $dog->breeding->heats[n] - now()
-- (calc) next_est_heat_date = $dog->breeding->heats[n] + weeks([weeks_between_heats])
-- (calc) due_date = $dog->breeding->[get last breeding by date]->mating[0] + 63 days
-- (calc) next_est_mated_at = $dog->breading->heat_at->last() + (8 days)
-- (calc) measurements[] = [$dog->measurement->[weights,length,temperature,progesterone] sorted by date
-- (calc) xray_est_at = $dog->breeding->[get the lastest mating by date]->mated_at + 53 days




#Litter
- id
- dame_id
- stud_id
- status ('expected', 'born', 'sold', 'delivered')
- timestamps
- did_mating_take (boolean default: yes) - did the mating have puppies? is a re-breeding necessary?
- (calc) birthday = $litter->puppies (orderby birthday take oldest)
- (calc) total =  $litter->puppies->count() 
- (calc) females
- (calc) males 


# Measurements (polymorphic)
- id
- measureable_type // model class name (Dog/Puppy)
- measureable_id // id of measureable_type
- type // type of measurement (weight, height, progesterone)
- value // value of measurement
- unit // unit of measurement (kg, cm, etc)
- measured_at // date of measurement
- timestamps 

# Heats (only female dogs)
- id
- 


#Breeders
- id 
- name
- is_co_breeder
- company
- address 
- city
- state
- postcode
- country
- ein/ssn
- phone
- email
- breeder_photo_url | media table?
- whelping_photo_url | media table?
