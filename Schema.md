# Dog
- id
- breeder_id - is the  Auth::User()->id
- name - is the name of the dog
- gender (male/female) 
- outside_stud (null if female) (boolean) 
- can_stud (null if female) (boolean)
- birthday
- breed
- generation
- size
- retired_at - hide if retired
- notes
- timestamps
-- (calc) age - (now - birthday)
-- (calc) latest_heat = $dog->heats[n]
-- (calc) weeks_between_heats = $dog->heats[n-1]->heat_at - $dog->heats[n]->heat_at
-- (calc) days_since_last_heat = $dog->heats[n]->heat_at - $dog->heats[n-1]->heat_at
-- (calc) days_until_next_heat = $dog->latest_heat - now() // days until next heat
-- (calc) next_est_heat_date = $dog->latest_heat + weeks([weeks_between_heats]) (more calcs on the model)
-- (calc) next_due_date = $dog->latest_litter->mated_at + 63 days
-- (calc) next_est_mated_at = $dog->latest_heat + (8 days)
-- (calc) measurements[] = [$dog->measurement->[weights,length,temperature,progesterone] sorted by measured_at]
-- (calc) xray_est_at = $dog->litter->[get the latest mating by date]->mated_at + 53 days

#Litter (belongs to dog)
- id
- dame_id
- stud_id
- status ('expected', 'born', 'sold', 'delivered')
- mated_at (null if not mated)
- timestamps
- got_pregnant (boolean default: yes)
-- (calc) birthday = $litter->puppies (orderby birthday of puppy take oldest)
-- (calc) total =  $litter->puppies->count() 
-- (calc) females =  $litter->puppies->count() (only females)
-- (calc) males =  $litter->puppies->count() (only males)


# Measurements
- id
- measurable_type // model class name (Dog/Puppy)
- measurable_id // id of measurable_type
- type // type of measurement (weight, height, progesterone)
- value // value of measurement
- unit // unit of measurement (kg, cm, etc)
- measured_at // date of measurement
- timestamps 

# Heats
- id
- dog_id (validate: is a female dog)
- heat_at (date)
- timestamps

#Puppies (belongs to a litter)
- id
- litter_id
- name
- adult_name
- collar_color
- birthday (datetime)
- timestamps

#Breeders/USER (
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
