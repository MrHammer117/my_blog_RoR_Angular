
require "mysql2"

begin
  client = Mysql2::Client.new(
    host: "localhost",
    port: 3306,
    username: "root",
    password: ENV.fetch("MARIADB_PASSWORD"),
    database: "my_blog_development",
    encoding: "utf8mb4"
  )

  puts "Connected to MariaDB!"

  db = client.query("SELECT DATABASE() AS db").first
  puts "Database: #{db['db']}"

  puts "Posts table:"
  puts client.query("SELECT COUNT(*) AS total FROM posts").first["total"]

  puts "Comments table:"
  puts client.query("SELECT COUNT(*) AS total FROM comments").first["total"]

  client.close

rescue StandardError => e
  warn "Database test failed: #{e.class}: #{e.message}"
end