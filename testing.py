from transformers import GPTNeoForCausalLM, GPT2Tokenizer

model = GPTNeoForCausalLM.from_pretrained("EleutherAI/gpt-neo-125M")
tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-neo-125M")

# prompt = "Generate a short, funny, and personalized message for a user based on their work experience and academic background. Inform the user that their resume information has been received, and they should keep an eye on their inbox for a personalized link to their resume game. Here is their data:\
# 1. Experience: Intern at TikTok US\
# 2. Academic: MSCS at USC\
#  "

prompt = "How are you?"
input_ids = tokenizer.encode(prompt, return_tensors="pt")
output = model.generate(input_ids, max_length=200, num_return_sequences=1, temperature=0.7)


response = tokenizer.decode(output[0], skip_special_tokens=True)
print(response)

from transformers import AutoModelForCausalLM, AutoTokenizer

# # Load the DialoGPT model and tokenizer
# model_name = "microsoft/DialoGPT-medium"
# tokenizer = AutoTokenizer.from_pretrained(model_name)
# model = AutoModelForCausalLM.from_pretrained(model_name)

# input_ids = tokenizer.encode(prompt, return_tensors="pt")
# output = model.generate(input_ids, max_length=150, num_return_sequences=1, temperature=0.9)

# # Decode and print the response
# response = tokenizer.decode(output[0], skip_special_tokens=True)
# print(response)