Rails.application.config.session_store :redis_store,
  servers: %w(redis://redis:6379/1),
  key: '_my_application_session'