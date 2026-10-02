# Configuração do EmailJS para o Formulário de Contato

O formulário de contato está configurado para enviar emails usando o serviço **EmailJS**. Siga os passos abaixo para configurar:

## Passo 1: Criar conta no EmailJS

1. Acesse https://www.emailjs.com/
2. Clique em "Sign Up" e crie uma conta gratuita
3. Verifique seu email

## Passo 2: Adicionar um Serviço de Email

1. No dashboard do EmailJS, clique em "Email Services"
2. Clique em "Add New Service"
3. Selecione "Gmail" (recomendado) ou outro provedor
4. Clique em "Connect Account" e autorize o acesso ao Gmail
5. Dê um nome ao serviço (ex: "mundo-expresso-service")
6. Copie o **Service ID** (será algo como `service_xxxxxxx`)

## Passo 3: Criar um Template de Email

1. No dashboard, clique em "Email Templates"
2. Clique em "Create New Template"
3. Configure o template:
   - **To Email**: `{{to_email}}` (o email destino)
   - **Subject**: Nova solicitação de orçamento - {{from_name}}
   - **Content** (use este modelo):

```
Olá,

Você recebeu uma nova solicitação de orçamento:

**Nome:** {{from_name}}
**Telefone/WhatsApp:** {{phone}}
**Email:** {{to_email}}

**O que precisa transportar:**
{{cargo}}

Entre em contato com o cliente o mais breve possível.

---
Enviado do site Mundo Expresso
```

4. Clique em "Save"
5. Copie o **Template ID** (será algo como `template_xxxxxxx`)

## Passo 4: Obter a Public Key

1. No dashboard do EmailJS, clique em "Account"
2. Copie a **Public Key** (será algo como `xxxxxxxxxxxxx`)

## Passo 5: Configurar o Projeto

1. Crie um arquivo `.env` na raiz do projeto (mesmo nível que package.json)
2. Copie o conteúdo do arquivo `.env.example` para o `.env`
3. Substitua os valores pelos que você copiou:

```env
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
```

## Passo 6: Testar

1. Reinicie o servidor de desenvolvimento (Ctrl+C e `npm run dev`)
2. Preencha o formulário no site
3. Verifique se o email chegou em mundoexpresson1@gmail.com

## Solução de Problemas

**Email não chega:**
- Verifique se as variáveis de ambiente estão corretas
- Confirme que o serviço EmailJS está ativo
- Verifique a pasta de spam do email

**Erro ao enviar:**
- Abra o console do navegador (F12) para ver o erro específico
- Verifique se as quotas gratuitas do EmailJS não foram excedidas

**Plano Gratuito EmailJS:**
- 200 emails por mês
- 2 contatos por envio
- Limite de 50 requisições por dia

Para necessidades maiores, considere um plano pago ou use uma solução de backend própria.
