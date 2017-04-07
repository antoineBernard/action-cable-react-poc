json.candidates @candidates do |candidate|
  json.id           candidate.id
  json.status       candidate.status
  json.first_name   candidate.first_name
  json.last_name    candidate.last_name
  json.gender       candidate.gender
  json.avatar       candidate.avatar
  json.average_rate candidate.average_rate.round(1)
