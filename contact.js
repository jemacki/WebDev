import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://bjchtnwvdvgetonbdryg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqY2h0bnd2ZHZnZXRvbmJkcnlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyOTQzMjYsImV4cCI6MjA3NTg3MDMyNn0.C5w3nvEmBZ66hWw69Q4NoZPKySP_Lpe51qMiYuWAKkE"; 

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("statusMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("nameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const message = document.getElementById("messageInput").value.trim();

  const { error } = await supabase
    .from("contact_messages")
    .insert([{ name, email, message }]);

  if (error) {
    statusMsg.style.display = "block";
    statusMsg.style.color = "red";
    statusMsg.textContent = "❌ Something went wrong. Try again.";
    return;
  }

  statusMsg.style.display = "block";
  statusMsg.style.color = "green";
  statusMsg.textContent = "✅ Message Sent Successfully!";

  form.reset();
});
